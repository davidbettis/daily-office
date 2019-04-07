default: test
	gatsby build --prefix-paths

clean:
	rm -rf public

test:
	npm test

server:
	gatsby develop

# if the DOM structure changes a lot, run this command
update-snapshot:
	npm test -- --updateSnapshot

deploy:
	aws s3 sync public ${DAILYOFFICE_S3}
