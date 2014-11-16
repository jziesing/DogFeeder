DogFeeder
=========
This is a project made for a software development class.  We skretched the rules and made an actual dog feeder that was able to communicate over the internet via WIFI or ethernet.  The project focuses on the use of an arduino yun as the embedded system on the dogfeeder.  We also use a tomcat server to host a webpage and to host our live webcam feed.
sketch_code:
	Location of all arduino files used in development of the dogfeeder. 
web:
	Location of tomcat web project that links to arduino
test:
	old web files.

Brief Synopsis:
	This project relies on proper setup and configuration of both the feeder and the web page.  I am not going to go into great detail, but you must connect the yun to the wifi or ethernet and configure its ip so it an talk properly with the server.  That also means the code on the arduino must no the servers ip.  There may be more to configure depending on specific systems, but the general structure of the project relies on these two address's getting configured properly in order to work as expected. 
