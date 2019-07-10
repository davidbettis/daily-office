default:
	cp ../website/src/data/*.json .
	mkdir -p build
	zip ./build/lambda-deploy.zip credentials.py lambda_function.py *.json

clean:
	rm -rf build
