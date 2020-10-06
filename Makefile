#!/usr/bin/make
.PHONY: buildout run cleanall test instance

bin/pip:
	if [ -f /usr/bin/virtualenv-2.7 ] ; then virtualenv-2.7 .;else virtualenv -p python2.7 .;fi
	touch $@

bin/buildout: bin/pip
	./bin/pip install -r requirements.txt
	touch $@

buildout: bin/buildout
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
	rm -rf bin develop-eggs downloads include lib parts .installed.cfg .mr.developer.cfg bootstrap.py parts/omelette local