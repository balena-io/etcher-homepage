---

title: Getting Started
order: 1

---

## What you will need

What you need to get started with the Balena Fin. All the components required to get started with the Balena Fin are available in our [Developer Kit](https://store.resin.io/collections/developer-kit/products/fin-developer-kit).

### Balena Fin
Any storage variant (8GB, 16GB, 32GB and 64GB) will work for this tutorial. If you don’t have one available, you can order now from the [Balena Fin Store](https://store.resin.io/collections/frontpage).



| Top Side                                                   | Bottom Side                                                      |
| :--------------------------------------------------------: | :--------------------------------------------------------------: |
| ![Fin mapping top](/assets/getting_started_top_mapping.jpg) | ![Fin mapping bottom](/assets/getting_started_bottom_mapping.jpg) |

### Micro-USB to USB cable
To connect your Fin to your computer you will need a USB to Micro-USB cable.

<img align="center" src="/assets/microusb.jpg" width="60%" >

### Raspberry Pi Compute Module 3 Lite
The Balena Fin supports the Raspberry Pi Compute Module 3 **Lite** (CM3L).
“Lite” means that the module itself has the eMMC socket unpopulated and the traces are exposed via SODIMM-200. This is very important since the standard CM3 has a fixed 4GB eMMC. Instead, with the CM3L, the Balena Fin can expose variable storage sizes via its embedded eMMC wired to the CM3L via the SODIMM-200 pins.

<img src="/assets/cm3.jpg" width="80%">


### Power Supply
The Balena Fin Developer kit includes a 5.5/2.1mm Barrel Jack Power supply that can be connected to the Barrel connector on the Fin (see BARREL_JACK on Top Mapping).
Any other compatible power supply can also be connected with a Phoenix connector (see PHOENIX on Top Mapping). The negative polarity of the Phoenix connector is labeled on the PCB with a “-” symbol.
You can also power the Balena Fin from the 5V pins exposed by the HAT connector, 2.5A are required as per the HAT specification.

<img align="center" src="/assets/power.jpg" width="80%" >

## Assembly set-up

### Raspberry Pi Compute Module
Place the SODIMM-200 Raspberry Pi Compute Module in the dedicated socket on the rear of the board (see CM3L_SOCKET on Bottom Mapping). Make sure the two side clips are gripping the module on its dedicated half-circular holes.

### RTC coin-cell battery
Place the coin-cell battery in its socket (see RTC_CELL on Top Mapping) with the positive polarity side facing upwards.
This step can be skipped if you don’t have a coin-cell available. Keep in mind that any RTC examples will not work properly.

## Setting up the Balena Fin

This tutorial will be focused on the standalone version of ResinOS 2.x. For more information on ResinOS see “Variants of ResinOS” in the [documentation](https://docs.resin.io/reference/OS/overview/2.x/).

_NOTE: Any other recent OS distribution (2018+) for the Raspberry Pi 3 Model B should be compatible with the Balena Fin, including Raspbian._  
*NOTE 2: In order to get you started quickly, we uploaded a pre-configured version of Raspbian [here](https://drive.google.com/open?id=14OD6I-h5n4sDulgjWWZL_KqHR9TSqrSC). Please not that this is a work in progress and updating the kernel is not supported at the moment.*


### Downloading the OS
The best way to get started is to connect the Fin to your wireless network and deploy a sample container.

If you are not sure how to do that, head over to the ResinOS documentation on the Balena Fin for a complete guide: https://resinos.io/docs/fincm3/gettingstarted/


### Sample projects

Now that you are familiar with loading application containers, let's try using the modules available on the Fin. We put together a [repository](https://github.com/resin-io/balena-fin-examples) to get you started with some examples.
