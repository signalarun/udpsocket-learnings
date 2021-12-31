# Client to demonstrate UDP communication
import socket

SERVER_IP = "127.0.0.1"
SERVER_PORT = 7010
SERVER_ADDRESS   = (SERVER_IP, SERVER_PORT)
BUFFER_SIZE = 1024

msgFromClient       = "Hello Server"
bytesToSend         = str.encode(msgFromClient)

UDPClientSocket = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)

UDPClientSocket.sendto(bytesToSend, SERVER_ADDRESS)
msgFromServer = UDPClientSocket.recvfrom(BUFFER_SIZE)

msg = "Server{}: {}".format(msgFromServer[1], msgFromServer[0])
print(msg)