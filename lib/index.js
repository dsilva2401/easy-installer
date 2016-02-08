// Import libs
	var shelljs = require('shelljs');
	var url = process.argv[2];
	var path = process.argv[3];

// Verify url parameter
	if (process.argv.length < 3) {
		console.error( 'Error: Missing url parameter' );
		return;
	}

// Clone repo and excec eifile.sh
	console.log('Cloning repository: '+url);
	shelljs.exec( 'git clone '+url+ ( path ? ' '+path : '') );
	shelljs.cd( path );
	shelljs.exec( 'chmod +x eifile.sh' );
	shelljs.exec( './eifile.sh' );
	shelljs.echo( 'Installation finished' );