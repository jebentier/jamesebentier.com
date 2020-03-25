# jamesebentier.com
My personal website, hosted at https://jamesebentier.com

## Stack
* HTML
* CSS3
* Javascript
* GitHub Workflow
* Docker

## Resume
This is my source controlled resume stored in a few different formats.  It is using `resume-cli` and `yaml2json` to render between these
few different formats.

### Usage
First you'll need to install docker as this is all packaged up using a docker image.

Run `docker run --rm -p 4000:4000 jebentier/resume serve` to run a local server with the resume renderd for local viewing on `localhost:4000`.

### Other Formats
Other supported formats for viewing are `json`, `yaml`, and `html`.  These can be triggered by using the same docker image as the compose file.

```docker run --rm jebentier/resume yaml```

### Different formats

### Disclamer
Please feel more than free to fork/copy/download and reuse this resume pattern, but do know this is my actual resume, so please
remove any and all of my information from it before using it for your own purposes.

## Deployment
Deployment is automatically done upon pushing to the `master` branch through the `Deploy` github workflow.
