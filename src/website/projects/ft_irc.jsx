import React, { useState } from "react";
import '../data/projects'
import { projects } from "../data/projects";
import '../Button.module.css'
import '../background.modules.css'

function FT_irc() {
    return (
        <>
            
            <div className="head-titele">
                    <h1 className="head-information-project">FT_IRC <img style={{width: '140px', marginTop: '10px'}}  className="image-project-info" src="/images/irc-logo.png" ></img>
                    </h1>
                    <div style={{display:'flex'}}>
                        <div className="edit-paragraph lineRight">
                        <p>
                        <h2 style={{marginTop: '0px'}}> What is IRC project ?</h2>
                        IRC is an application-level protocol for exchanging
                        messages in real-time. It allows for group communication like
                        join chat rooms (also called channels) and have conversations 
                        with other users in those channels, you can also send
                        private messages, and data exchange, including file transfer.
                        IRC uses the TCP transport protocol and optional
                        cryptographic TLS.
                        </p> 
                        </div>
                        <img style={{width: '360px', marginLeft: '10px'}} className="image-infos lineDown"  src="/images/irc-logo.png"></img>
                    </div>
                    <div style={{display:'flex'}}>
                        <img style={{marginTop : '0px'}} className="image-infos lineDown"  src="/images/pngwing.com (3) (1).png"></img>
                        <div className="edit-paragraph lineRight">
                        <p >
                        <h2 style={{marginTop: '0px'}}> FT_IRC 42 Implementation</h2>
                            The ft_irc 42 project involves implementing an IRC server in C++.
                            The implementation includes handling IRC messages, parsing commands,
                            and managing user connections. The project also involves implementing 
                            features such as user authentication, channel management, and message relay.
                        </p>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent: 'center',  marginBottom: '30px'}}>
                        <div style={{width: '600px', display:'flex', justifyContent: 'center', border:'solid', borderColor:  'rgb(73, 72, 72)'}} className="edit-paragraph lineRight">
                        <p>
                        <h2 style={{marginTop: '0px'}}>The main parts of the project</h2>
                            <ul>
                                <li>Create all the necessary classes and methods for the project</li>
                                <li>Create a socket and handle the server signals.</li>
                                <li>If the event is a new client, register it.</li>
                                <li>If the event is data from a registered client, handle it.</li>
                                <li>Use the poll() function to check if an event has occurred.</li>
                            </ul>
                        </p> 
                        </div>
                    </div>
    
                    <div className="cont-ver lineDown">
                        <div className="cont-ver" style={{ padding:'auto', width : '600px', border: 'solid ', borderColor:  'rgb(73, 72, 72)'}}>
                            <h2 style={{paddingTop:'20px', margin: 'auto',}}> Socket in Computer Network</h2>
                            <div>
                                <img  style={{paddingLeft:'20px'}} className="image-cont-ver "  src="/images/sockets(1).png"></img>
                            </div>

                        </div>
                    </div>
                    <div className="content-para">
                        <div style={{width:'500px'}}  className="first-side">
                            <p>
                                <strong>A socket is one endpoint socket</strong> 
                                is one endpoint of a two way communication
                                link between two programs running on the network.
                                The socket mechanism provides a means of inter-process
                                communication (IPC) by establishing named contact points
                                between which the communication take place. <br/>
                                Socket are generally employed in client server applications.
                                The server creates a socket, attaches it to a network
                                port addresses then waits for the client to contact it.
                                The client creates a socket and then attempts to connect 
                                to the server socket. When the connection is established,
                                transfer of data takes place.
                            </p>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="edit-paragraph lineRight">
                        <p >
                        <h2 style={{marginTop: '0px'}}> Stages for Server</h2>
                            <strong>The server is created using the following steps:</strong>
                            1. Socket Creation <br/>
                                int sockfd = socket(domain, type, protocol)
                                sockfd: socket descriptor, an integer (like a file handle) <br/>
                                domain: integer, specifies communication domain. 
                                We use we use AF_INET and AF_I NET 6 for 
                                processes connected by IPV6. <br/>
                                type: communication type<br/>
                                SOCK_STREAM: TCP(reliable, connection-oriented)<br/>
                                SOCK_DGRAM: UDP(unreliable, connectionless) <br/>
                                protocol: Protocol value for Internet Protocol(IP),
                                which is 0. This is the same number that appears on 
                                the protocol field in the IP header of a packet.
                                (man protocols for more details)
                        </p>
                        </div>
                        <img style={{margin: '0px', width: '450px'}} className="image-infos lineDown"  src="/images/socket-last.png"></img>
                    </div>
                    <div style={{display:'flex'}}>
                        
                        <div className="edit-paragraph lineRight">
                        <p >
                        2. Setsockopt <br/>
                            This helps in manipulating options for the
                            socket referred by the file descriptor sockfd.
                            This is completely optional, but it helps in reuse
                            of address and port. Prevents error such as: “address
                            already in use”.
                            int setsockopt(int sockfd, int level, 
                            int optname,  const void *optval, socklen_t optlen);

                            </p>
                            </div>
                        <div  className="edit-paragraph lineRight" style={{paddingLeft: '0px'}}>
                        <p >
                        3. Bind <br/>
                            int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
                            After the creation of the socket, the bind function binds the socket
                            to the address and port number specified in addr(custom data structure).
                            In the example code, we bind the server to the localhost, hence we use INADDR_ANY
                            to specify the IP address.
                            </p>
                            </div>
                    </div>
                    <div style={{display:'flex'}}>
                        
                        <div className="edit-paragraph lineRight">
                        <p >
                            4. Listen
                            int listen(int sockfd, int backlog);
                            It puts the server socket in a passive mode,
                            where it waits for the client to approach the
                            server to make a connection. The backlog, defines 
                            the maximum length to which the queue of pending 
                            connections for sockfd may grow. If a connection request 
                            arrives when the queue is full, the client may 
                            receive an error with an indication of ECONNREFUSED.
                            </p>
                            </div>
                        <div  className="edit-paragraph lineRight" style={{paddingLeft: '0px'}}>
                        <p >
                            5. Accept
                            int new_socket= accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen);
                            It extracts the first connection request
                            on the queue of pending connections for the
                            listening socket, sockfd, creates a new connected socket,
                            and returns a new file descriptor referring to that socket.
                            At this point, the connection is established between client 
                            and server, and they are ready to transfer data.
                            </p>
                            </div>
                    </div>
                    <div style={{display:'flex', justifyContent: 'center'}}>
                        <div className="edit-paragraph lineRight">
                        <p >
                        <h2 style={{marginTop: '40px'}}> Stages for Client</h2>
                        1. Socket connection: Exactly the same
                         as that ofserver’s socket creation

                        2. Connect: The connect() system call connects the socket
                            referred to by the file descriptor sockfd to the address specified
                            by addr. Server’s address and port is specified in addr.
                            int connect(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
                        </p>
                        </div>
                        {/* <img style={{marginTop: '60px', width:'300px', height:'200px'}} className="image-infos lineDown"  src="/images/pngwing.com (2) (1).png"></img> */}
                    </div>
                        <div style={{display:'flex', justifyContent: 'center',  marginBottom: '30px'}}>
                            <div style={{ marginBottom:'40px', width: '400px', display:'flex', justifyContent: 'center', border:'solid', borderColor:  'rgb(73, 72, 72)'}} className="edit-paragraph lineRight">
                            <p>
                            <h2 style={{marginTop: '0px'}}>Checkout more resources </h2>
                                <ul>
                                    <li> <a style={{color: 'white'}} href="https://www.rfc-editor.org/rfc/rfc2812">Internet Relay Chat: Client Protocol</a></li>
                                    <li> <a style={{color: 'white'}} href="https://modern.ircdocs.horse/">Modern IRC Client Protocol</a></li>
                                    <li> <a style={{color: 'white'}} href="https://medium.com/@afatir.ahmedfatir/small-irc-server-ft-irc-42-network-7cee848de6f9#:~:text=Part%203%3A%20Use%20the%20poll()%20function%20to%20check%20if%20an%20event%20has%20occurred.">Small IRC Server [ft_irc 42 network]</a></li>
                                    <li> <a style={{color: 'white'}} href="https://www.geeksforgeeks.org/socket-programming-cc/">Socket Programming in C/C++</a></li>
                                    <li> <a style={{color: 'white'}} href="https://www.geeksforgeeks.org/socket-in-computer-network/">Socket in Computer Network</a></li>
                                </ul>
                            </p> 
                            </div>
                        </div>
                </div>

        </>
    )
}

export default FT_irc