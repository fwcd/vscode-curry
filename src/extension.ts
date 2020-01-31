import * as vscode from "vscode";
import { LanguageClient, ServerOptions, LanguageClientOptions, RevealOutputChannelOn } from "vscode-languageclient";

export async function activate(context: vscode.ExtensionContext): Promise<void> {
    const curryConfig = vscode.workspace.getConfiguration("curry");
    const langServerEnabled = curryConfig.get("languageServer.enabled");
    
    if (langServerEnabled) {
        activeLanguageServer(context, curryConfig);
    }
}

export async function activeLanguageServer(context: vscode.ExtensionContext, config: vscode.WorkspaceConfiguration): Promise<void> {
    const path = config.get("languageServer.path");
    if (!path) {
        vscode.window.showWarningMessage("Specify the path to a Curry Language Server executable to use IDE features!");
        return
    }
    
    // Configure the language client
    const outputChannel = vscode.window.createOutputChannel("Curry");
    const clientOptions: LanguageClientOptions = {
        documentSelector: [
            { language: "curry", scheme: "file" }
        ],
        outputChannel: outputChannel,
        revealOutputChannelOn: RevealOutputChannelOn.Never
    };
    const serverOptions: ServerOptions = {
        command: config.get("languageServer.path")
    };
    const languageClient = new LanguageClient("curry", "Curry Language Client", serverOptions, clientOptions);
    
    // Start the language client
    let languageClientDisposable = languageClient.start();
    context.subscriptions.push(languageClientDisposable);
    
    context.subscriptions.push(vscode.commands.registerCommand("curry.languageServer.restart", async () => {
        await languageClient.stop();
        languageClientDisposable.dispose();
        
        outputChannel.appendLine("");
        outputChannel.appendLine(" === Language Server Restart ===");
        outputChannel.appendLine("");
        
        languageClientDisposable = languageClient.start();
        context.subscriptions.push(languageClientDisposable);
    }));
}
