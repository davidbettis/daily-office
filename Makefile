OUTPUT_DIR=out

default: release

release: build

check:
	eslint src

build:
	npm run build 

clean:
	rm -rf ${OUTPUT_DIR}

server:
	npm run dev

deploy: clean release
	aws s3 sync ${OUTPUT_DIR} ${DAILYOFFICE_S3}

local-deploy: clean release
	sudo rm -rf /Library/WebServer/Documents/daily-office/* && sudo cp -R ${OUTPUT_DIR}/* /Library/WebServer/Documents/daily-office
