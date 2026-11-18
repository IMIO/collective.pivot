Using the development buildout
==============================

Create a virtualenv in the package::

    $ virtualenv --clear .

Install requirements with pip::

    $ ./bin/pip install -r requirements.txt

Run buildout::

    $ ./bin/buildout -c test_plone6.2.cfg

Start Plone in foreground:

    $ ./bin/instance fg


Running tests
-------------

    $ tox

list all tox environments:

    $ tox -l
    py312-lint
    py310-Plone62
    py311-Plone62
    py312-Plone62
    py313-Plone62
    py314-Plone62

run a specific tox env:

    $ tox -e py314-Plone62
