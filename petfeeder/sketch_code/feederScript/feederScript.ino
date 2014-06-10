
#include <Bridge.h>
#include <Process.h>
#include <Servo.h>
Servo myServo;        // Create Servo object to control the servo 
Servo servo1; Servo servo2; 
int servo1Pos = 90;
int servo2Pos = 90;
int ite = 0;

void setup() {
  // attach the servos
  servo1.attach(11);
  servo2.attach(10);
  myServo.attach(9);  // feeding servo is connected to digital pin 9 
  
  // reset the servos' angles
  servo1.write(90);
  servo2.write(90);
  myServo.writeMicroseconds(1500);  // Stop
  
  pinMode(13, OUTPUT);
  digitalWrite(13, LOW);
  Bridge.begin();
  videoStream();
}

void loop() {
  moveCam();
  
  if (ite%10 == 0){
    // set up the server IP for video streaming
    updateIP();
    getFeed();
  }
  
  ite = (ite+1)%10;
  delay(500);
}

void moveCam(){
  static int v = 0;
  Process p;        // Create a process and call it "p"
  p.begin("curl");  // Process that launch the "curl" command
  p.addParameter("http://128.223.6.249:8080/arduinoFeeder/MoveCamera"); // Add the URL parameter to "curl"
  p.run();      // Run the process and wait for its termination

  while (p.available()>0) {
    char ch = p.read();
    Serial.print(ch);
    
    switch(ch) {
      case '0'...'9':
        v = v * 10 + ch - '0';
        break;
      case 'x':
        moveCam(v, 0);
        v = 0;
        break;
      case 'y':
        moveCam(v, 1);
        v = 0;
        break;
    }
  }
  Serial.flush();
}

// update the stream IP address
void updateIP(){
  Process p;        // Create a process and call it "p"
  p.begin("curl");  // Process that launch the "curl" command
  p.addParameter("http://128.223.6.249:8080/arduinoFeeder/MonitorIP?type=setIP"); // Add the URL parameter to "curl"
  p.run();      // Run the process and wait for its termination

  while (p.available()>0) {
    char c = p.read();
    Serial.print(c);
  }
  Serial.flush();
}

// start running webcam stream
void videoStream(){
  Process process;
  process.runShellCommand("mjpg_streamer -i \"input_uvc.so -d /dev/video0 -r 640x480 -f 15\" -o \"output_http.so -p 8080 -w /www/webcam\" -b");
  while(process.running());
}

// get the audio command
void getFeed() {
  // Launch "curl" command and get Arduino ascii art logo from the network
  // curl is command line program for transferring data using different internet protocols
  Process p;        // Create a process and call it "p"
  p.begin("curl");  // Process that launch the "curl" command
  p.addParameter("http://128.223.6.249:8080/arduinoFeeder/Feed"); // Add the URL parameter to "curl"
  p.run();      // Run the process and wait for its termination

  // Print arduino logo over the Serial
  // A process output can be read with the stream methods
  while (p.available()>0) {
    char c = p.read();
    Serial.print(c);
    if (c>48 && c<58){
      myServo.writeMicroseconds(1700);  // Counter clockwise
      delay((c-48)*1000);
      myServo.writeMicroseconds(1500);  // Stop
    }
  }
  // Ensure the last bit of data is sent.
  Serial.flush();
}

// get the audio command
void getAudio() {
  // Launch "curl" command and get Arduino ascii art logo from the network
  // curl is command line program for transferring data using different internet protocols
  Process p;        // Create a process and call it "p"
  p.begin("curl");  // Process that launch the "curl" command
  p.addParameter("http://128.223.6.249:8080/arduinoFeeder/Feed"); // Add the URL parameter to "curl"
  p.run();      // Run the process and wait for its termination

  // Print arduino logo over the Serial
  // A process output can be read with the stream methods
  while (p.available()>0) {
    char c = p.read();
    Serial.print(c);
    if (c == '6'){
      Process process;
      process.runShellCommand("madplay /mnt/sda1/songs/tailtoddle_lo.mp3 &");
      while(process.running());
    }
  }
  // Ensure the last bit of data is sent.
  Serial.flush();
}

void moveCam(int angle, int axis){
  Servo curServo;
  int pos;
  
  if (axis == 0){
    pos = servo1Pos;
  }else{
    pos = servo2Pos;
  }
  
  while (angle != pos){
    if (angle > pos){
      pos += 1;
      if (axis == 0){
        servo1.write(pos);
      }else{
        servo2.write(pos);
      }
      delay(5);
    }else{
      pos -= 1;
      if (axis == 0){
        servo1.write(pos);
      }else{
        servo2.write(pos);
      }
      delay(5);
    }
  }
  
  if (axis == 0){
    servo1Pos = pos;
  }else{
    servo2Pos = pos;
  }
}
