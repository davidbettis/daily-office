default:
	cp ../website/src/data/*.json .
	mkdir -p build
	zip ./build/lambda-deploy.zip credentials.py daily-office-get-scripture.py *.json

clean:
	rm -rf build
