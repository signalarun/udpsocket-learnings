# Server to demonstrate UDP communication
import socket

LOCAL_IP     = "127.0.0.1" # Server IP
LOCAL_PORT   = 7010 # Server port
BUFFER_SIZE  = 1024 

msgFromServer       = "Hello Client"
bytesToSend         = str.encode(msgFromServer)

UDPServerSocket = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)
UDPServerSocket.bind((LOCAL_IP, LOCAL_PORT))

print("Server(UDP) up and listening")

while(True):

    bytesAddressPair = UDPServerSocket.recvfrom(BUFFER_SIZE)
    message = bytesAddressPair[0]
    address = bytesAddressPair[1]

    clientMsg = "{}".format(message)
    clientIP  = "Client{}".format(address)
    print(clientIP + ": " + clientMsg)

    UDPServerSocket.sendto(bytesToSend, address)