default:
	cp ../website/src/data/*.json .
	mkdir -p build
	zip ./build/lambda-deploy.zip credentials.py lambda_function.py *.json

unit-tests:
	python3 unit_tests.py

integration-tests: 
	python3 integration_tests.py 

clean:
	rm -rf build __pycache__
