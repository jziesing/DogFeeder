#include <Servo.h>

Servo servo1; Servo servo2; 
int servo1Pos = 90;
int servo2Pos = 90;

void setup() {
  // attach the servos
  servo1.attach(11);
  servo2.attach(10);
  
  // reset the servos' angles
  servo1.write(90);
  servo2.write(90);
}

void loop() {
  static int v = 0;

  if ( Serial.available()) {
    char ch = Serial.read();

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
