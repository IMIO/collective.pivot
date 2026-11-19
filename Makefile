#!/usr/bin/make
.PHONY: buildout run cleanall test instance

bin/pip:
	python3 -m venv .
	touch $@

bin/buildout: bin/pip
	ln -fs test_plone6.2.cfg buildout.cfg
	./bin/pip install -r requirements.txt
	touch $@

buildout: bin/buildout
	./bin/buildout -t 7

run:
	./bin/instance fg

test: buildout
	./bin/test

instance: buildout
	./bin/instance fg

cleanall:
	rm -rf bin develop-eggs downloads include lib parts share .installed.cfg .mr.developer.cfg bootstrap.py parts/omelette local
