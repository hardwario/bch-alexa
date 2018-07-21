from setuptools import setup


setup(
	name="bch-alexa",
	version="1.0",
	py_modules=["bch-alexa"],
	install_requires=[
		"Requests",
		"Click",
		"pynpm",
	],
	entry_points='''
		[console_scripts]
		bch-alexa=bch_alexa:cli
	'''
)
