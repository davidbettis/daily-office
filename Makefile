default:
	gatsby build --prefix-paths

clean:
	rm -rf public

server:
	gatsby develop
