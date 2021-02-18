#!/usr/bin/make
.PHONY: buildout run cleanall test instance

bin/pip:
	if [ -f /usr/bin/virtualenv-2.7 ] ; then virtualenv-2.7 .;else virtualenv -p python2.7 .;fi
	touch $@

bin/pip3:
	if [ -f /usr/bin/python3.8 ] ; then python3.8 -m venv .;else python3 -m venv . .;fi
	touch $@

bin/buildout: bin/pip
	ln -fs test_plone43.cfg buildout.cfg
	./bin/pip install -r requirements43.txt
	touch $@

bin/buildout3: bin/pip3
	ln -fs test_plone52.cfg buildout.cfg
	./bin/pip3 install -r requirements52.txt
	touch $@

build_plone43: bin/buildout
	./bin/buildout -t 7

build_plone52: bin/buildout3
	./bin/buildout -t 7

run:
	./bin/instance fg

test: buildout
	./bin/test

jenkins: bin/buildout
	./bin/buildout -c jenkins.cfg

instance: buildout
	./bin/instance fg

cleanall:
	rm -rf bin develop-eggs downloads include lib parts share .installed.cfg .mr.developer.cfg bootstrap.py parts/omelette local
