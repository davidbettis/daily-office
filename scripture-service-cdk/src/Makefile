default:
	mkdir -p build
	cp credentials.py lambda_function.py ./build
	mkdir -p build/data
	cp ../../website/src/data/*.json ./build/data/
	pip install --target ./build requests

unit-tests:
	python3 unit_tests.py

integration-tests: 
	python3 integration_tests.py 

clean:
	rm -rf build __pycache__
