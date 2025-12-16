// Simulated GHOST Protocol Service
// Replacing external API calls with local "hacker" logic for stability and "vibe"

export const sendMessageToGhost = async (_history: any[], message: string): Promise<string> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 600));

  const msg = message.toLowerCase().trim();

  // Simple keyword matching for interactive feel
  if (msg.includes('help')) {
    return `AVAILABLE_PROTOCOLS:
> WHOAMI    : Identify system persona
> PROJECTS  : List active operations
> SKILLS    : Display operative capabilities
> CONTACT   : Establish secure comms`;
  }

  if (msg.includes('who') || msg.includes('intro') || msg.includes('ghost')) {
    return "IDENTITY_CONFIRMED: I am the GHOST Protocol (v2.5). I serve as the automated sentinel for this digital fortress. My function is to assist authorized personnel.";
  }

  if (msg.includes('project') || msg.includes('work')) {
    return "ACCESSING_ARCHIVES... [SUCCESS]\nDisplaying classified projects in the ARCHIVES tab.\n> Neural_Net_Visualizer [ONLINE]\n> Crypto_Sentinel [CLASSIFIED]";
  }

  if (msg.includes('skill') || msg.includes('stack')) {
    return "SYSTEM_ANALYSIS:\n> Frontend: React, Tailwind, WebGL\n> Backend: Node.js, Python\n> Security: Penetration Testing\n\nOperative is performing at peak efficiency.";
  }
  
  if (msg.includes('contact') || msg.includes('hire')) {
    return "COMM_UPLINK_ESTABLISHED:\nPlease transmit contract details via standard frequency (email) or secure channels (LinkedIn).";
  }

  // Fallback responses
  const fallbacks = [
    `INPUT_RECEIVED: "${message}". Command not recognized.`,
    "PROCESSING... Data corrupted or encrypted. Please refine query.",
    "ACCESS_DENIED: Unknown syntax. Try 'HELP' for a list of protocols.",
    "PACKET_LOSS_DETECTED: Retransmit message."
  ];

  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
};