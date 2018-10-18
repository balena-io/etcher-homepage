---

title: Developer Instructions
order: 3

---

## Installing specific Hardware support

#### Generic instructions for raspbian 2018-06-27 or later:

- Download the pre-build raspbian (both lite and pixel available) for the Balena Fin at [this link](https://drive.google.com/open?id=14OD6I-h5n4sDulgjWWZL_KqHR9TSqrSC)

- Flash (we suggest using [etcher](http://etcher.io) ) and boot your device.

#### resinOS / resin.io instructions:

- Download the [Balena Fin (CM3) device type image](https://resinos.io/#downloads-balenafin) (on resin.io, create a Balena Fin (CM3) application first):

![Fin device type on resin.io](/assets/fin_device_type.png)

- Flash (we suggest using [etcher](http://etcher.io) ) and boot your device.

## Programming Artik020 on Balena Fin

The Artik020 SWDIO interface is exposed to the CM3L via a FTDI FT2232H-56Q JTAG USB controller. This means that the Artik020 can be flashed from the CM3L via, for example, openOCD. A reference can be found [here](https://github.com/resin-io-modules/FT2232H-56Q-openocd).

_NOTE: A firmata-based firmware and client library is under development. This will allow users to easily interact with the co-processor from the CM3L without needing to write their own firmware._

## Using the RTC from CM3L

The Balena Fin sports a very common I2C RTC module that is well known, supported, and documented within the Raspberry Pi ecosystem: the **DS1307.**

There are plenty of guides on how to interact with the chip, including the following:

- [https://learn.adafruit.com/adding-a-real-time-clock-to-raspberry-pi/set-rtc-time](https://learn.adafruit.com/adding-a-real-time-clock-to-raspberry-pi/set-rtc-time)
- [https://thepihut.com/blogs/raspberry-pi-tutorials/17209332-adding-a-real-time-clock-to-your-raspberry-pi](https://thepihut.com/blogs/raspberry-pi-tutorials/17209332-adding-a-real-time-clock-to-your-raspberry-pi)

## Controlling the RGB LED

- `echo 504 > /sys/class/gpio/export # (Red)`
- `echo 505 > /sys/class/gpio/export # (Green)`
- `echo 506 > /sys/class/gpio/export # (Blue)`
- `echo "out" > /sys/class/gpio/gpio504/direction`
- `echo "out" > /sys/class/gpio/gpio505/direction`
- `echo "out" > /sys/class/gpio/gpio506/direction`

Now that you have the 3 GPIO LED pins ready, you can define your target color by setting each LED to high or low. For example, to turn the RGB off:

- `echo 0 > /sys/class/gpio/gpio504/value`
- `echo 0 > /sys/class/gpio/gpio505/value`
- `echo 0 > /sys/class/gpio/gpio506/value`

## Toggling the Status LED bank

This device sports 9 status LEDs varying from power, eMMC, ethernet, WiFi, WAN, etc. There is a switch which allows users to toggle them all on and off via software.

- `echo 511 > /sys/class/gpio/export`
- `echo "out" > /sys/class/gpio/gpio511/direction`
- `echo 0 > /sys/class/gpio/gpio511/value # turn off`
- `echo 1 > /sys/class/gpio/gpio511/value # turn on`

## Cellular via mPCIe card

We are working on identifying and documenting cards known to work out of the box on the board. If you plan on adding LTE capability to the device, we suggest the Quectel EC20EA-MINIPCIE: the card is known to work out of the box, hence only APN configuration is required. On ResinOS (2.0.0+) you do so by adding a NetworkManager profile in the boot partition under the "system-connections" folder. You can find more info about this on our docs at: [https://docs.resin.io/deployment/network/2.0.0/#cellular-modem-setup](https://docs.resin.io/deployment/network/2.0.0/#cellular-modem-setup).

![Fin bottom with mPCIe modem](https://github.com/resin-io/balena-fin/raw/master/documentation/manual/pictures/fin_bottom_modem.jpg)

Disabling RF activity on mPCIe radio cards

- `echo 508 > /sys/class/gpio/export`
- `echo "out" > /sys/class/gpio/gpio508/direction`
- `echo 1 > /sys/class/gpio/gpio508/value # mPCIe on`
- `echo 0 > /sys/class/gpio/gpio508/value # mPCIe off`

Disabling HDMI

- `echo 507 > /sys/class/gpio/export`
- `echo "out" > /sys/class/gpio/gpio507/direction`
- `echo 1 > /sys/class/gpio/gpio507/value # HDMI off`
- `echo 0 > /sys/class/gpio/gpio507/value # HDMI on`

## Power saving

- Turn off HDMI when not required
- Turn off the STATUS LEDs bank
- Programmatically disable RF activity on mPCIe when not required (assumes a cellular modem is being used)
- Programmatically power on and off the CM3L when not required via the co-processor PIN PC9 (5V interface) and PIN PF5 (3.3V interface). This is the equivalent of unplugging power from the Raspberry Pi

_NOTE: A firmata-based firmware and client library is under development. This will allow users to easily interact with the co-processor from the CM3L without needing to write their own firmware._
