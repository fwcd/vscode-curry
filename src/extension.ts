import * as vscode from "vscode";
import * as process from "process";
import { LanguageClient, ServerOptions, LanguageClientOptions, RevealOutputChannelOn, TransportKind } from "vscode-languageclient/node";

let languageClient: LanguageClient | undefined;

export async function activate(context: vscode.ExtensionContext): Promise<void> {
    const curryConfig = vscode.workspace.getConfiguration("curry");
    const langServerEnabled = curryConfig.get("languageServer.enabled");
    
    if (langServerEnabled) {
        activeLanguageServer(context, curryConfig);
    }
}

export async function deactivate(): Promise<void> {
    if (!languageClient) { return; }
    return await languageClient.stop();
}

export async function activeLanguageServer(context: vscode.ExtensionContext, config: vscode.WorkspaceConfiguration): Promise<void> {
    const path = config.get("languageServer.path");
    if (!path) {
        vscode.window.showWarningMessage("Specify the path to a Curry Language Server executable in your settings to use IDE features!");
        return
    }
    
    // Configure the language client
    const outputChannel = vscode.window.createOutputChannel("Curry");
    const clientOptions: LanguageClientOptions = {
        documentSelector: [
            { language: "curry", scheme: "file" }
        ],
        synchronize: {
            configurationSection: 'curry'
        },
        outputChannel: outputChannel,
        progressOnInitialization: true,
        revealOutputChannelOn: RevealOutputChannelOn.Never
    };
    const serverOptions: ServerOptions = {
        command: config.get("languageServer.path"),
        options: {
            env: {
                ...process.env,
                LC_ALL: "en_US.UTF-8"
            }
        },
        transport: TransportKind.stdio
    };

    languageClient = new LanguageClient("curry", "Curry Language Client", serverOptions, clientOptions);
    
    // Start the language client
    languageClient.start();
}
