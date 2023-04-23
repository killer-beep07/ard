#include <Arduino.h>

int SBPM;
int BPM;
void setup()
{
  pinMode(A0,INPUT);
  Serial.begin(9600);
  Serial.print("begin\n");
  delay(6000);
}
void loop()
{
SBPM=analogRead(A0);
BPM=(SBPM/10);
   if (BPM >= 60 && BPM <= 100) {
    Serial.println("Heart rate: regular");
  } else {
    Serial.println("Heart rate: irregular");
  }
  Serial.println(BPM);
  delay(3000);
}


