#!/usr/bin/env python3
"""
Simple HTTP server for flashcard study app
Serves the current directory on local network
"""

import http.server
import socketserver
import socket
import webbrowser
import os
import sys

def get_local_ip():
    """Get the local IP address"""
    try:
        # Connect to a remote server to determine local IP
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            local_ip = s.getsockname()[0]
        return local_ip
    except Exception:
        return "localhost"

def main():
    PORT = 8000
    
    # Change to the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Check if index.html exists
    if not os.path.exists("index.html"):
        print("❌ Error: index.html not found in current directory!")
        print("Please make sure you've saved the flashcard HTML as 'index.html'")
        sys.exit(1)
    
    local_ip = get_local_ip()
    
    print("🚀 Starting flashcard study server...")
    print(f"📱 Access from mobile: http://{local_ip}:{PORT}/")
    print(f"💻 Access from desktop: http://localhost:{PORT}/")
    print("📋 Make sure your mobile device is on the same Wi-Fi network")
    print("⏹️  Press Ctrl+C to stop the server")
    print("-" * 60)
    
    # Create server
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"✅ Server running at http://{local_ip}:{PORT}/")
            
            # Optionally open in browser
            try:
                webbrowser.open(f"http://localhost:{PORT}/")
            except:
                pass
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n👋 Server stopped. Good luck with your exam!")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {PORT} is already in use. Try killing other servers or use a different port.")
        else:
            print(f"❌ Error starting server: {e}")

if __name__ == "__main__":
    main()
