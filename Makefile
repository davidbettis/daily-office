default: test
	gatsby build --prefix-paths

clean:
	rm -rf public

test:
	npm test

server:
	gatsby develop
