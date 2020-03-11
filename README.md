<a href="https://www.hardwario.com/"><img src="https://www.hardwario.com/ci/assets/hw-logo.svg" width="200" alt="HARDWARIO Logo" align="right"></a>

#  HARDWARIO Alexa app

This repository contains HARDWARIO Alexa app for connecting between AWS and HARDWARIO.


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT/) - see the [LICENSE](LICENSE) file for details.

## Example
```
bch-alexa --certs
```
## Install from GitHub
```
git clone https://github.com/bigclownlabs/bch-alexa.git
```
```
cd bch-alexa
```
### Windows
```
pip install --upgrade --no-cache-dir --editable .
```
### Ubuntu and macOS
```
sudo pip install --upgrade --no-cache-dir --editable .
```
## How to use
1. Ask Alexa on your ID: "Alexa, ask bigclown to show my id". Open your Alexa app and copy ID from HARDWARIO card.
2. Instal dependencies: [Python](https://www.python.org/downloads/), [pip](https://pip.pypa.io/en/stable/installing/), [Node.js](https://nodejs.org/en/download/), [pm2](https://www.npmjs.com/package/pm2)
3. Install bch-alexa by following upwords
4. Run command 'bch-alexa --certs' paste ID from Alexa app
5. Make sure that console told you 'Your certificates are downloaded successfully!'
6. If 5th point is true, run command 'bch-alexa --install'
7. Now subscribe localhost mqtt with topic 'alexa/strip' and say to Alexa 'Alexa, ask bigclown to set strip to red' and on your mqtt client will be mqtt request with topic 'alexa/strip' and payload 'red'
---

Made with &#x2764;&nbsp; by [**HARDWARIO s.r.o.**](https://www.hardwario.com/) in the heart of Europe.
