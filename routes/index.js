const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const vertex = require('vertex360')({site_id:pkg_json.app})
const router = vertex.router()
const ent = require('ent')

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', function(req, res){
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

/*  This route render json data */
router.get('/json', function(req, res){
	res.json({
		confirmation: 'success',
		app: pkg_json.app,
		data: 'this is a sample json route.'
	})
})

/*  This route sends text back as plain text. */
router.get('/send', function(req, res){
	res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', function(req, res){
	res.redirect('https://www.turbo360.co/landing')
})

router.get('/ent', function(req, res){
	const html = `&#60;!DOCTYPE html&#62;&#10;&#60;html&#62;&#10;&#60;head&#62;&#10;&#60;title&#62;Turbo 360&#60;/title&#62;&#10;&#60;meta charset=&#34;utf-8&#34;&#62;&#10;&#60;meta name=&#34;viewport&#34; content=&#34;width=device-width, initial-scale=1&#34;&#62;&#10;&#60;meta http-equiv=&#34;X-UA-Compatible&#34; content=&#34;IE=edge&#34; /&#62;&#10;&#60;style type=&#34;text/css&#34;&#62;&#10;    /* CLIENT-SPECIFIC STYLES */&#10;    body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;} /* Prevent WebKit and Windows mobile changing default text sizes */&#10;    table, td{mso-table-lspace: 0pt; mso-table-rspace: 0pt;} /* Remove spacing between tables in Outlook 2007 and up */&#10;    img{-ms-interpolation-mode: bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */&#10;&#10;    /* RESET STYLES */&#10;    img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none;}&#10;    table{border-collapse: collapse !important;}&#10;    body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}&#10;&#10;    /* iOS BLUE LINKS */&#10;    a[x-apple-data-detectors] {&#10;        color: inherit !important;&#10;        text-decoration: none !important;&#10;        font-size: inherit !important;&#10;        font-family: inherit !important;&#10;        font-weight: inherit !important;&#10;        line-height: inherit !important;&#10;    }&#10;&#10;    /* MOBILE STYLES */&#10;    @media screen and (max-width: 525px) {&#10;&#10;        /* ALLOWS FOR FLUID TABLES */&#10;        .wrapper {&#10;          width: 100% !important;&#10;            max-width: 100% !important;&#10;        }&#10;&#10;        /* ADJUSTS LAYOUT OF LOGO IMAGE */&#10;        .logo img {&#10;          margin: 0 auto !important;&#10;        }&#10;&#10;        /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */&#10;        .mobile-hide {&#10;          display: none !important;&#10;        }&#10;&#10;        .img-max {&#10;          max-width: 100% !important;&#10;          width: 100% !important;&#10;          height: auto !important;&#10;        }&#10;&#10;        /* FULL-WIDTH TABLES */&#10;        .responsive-table {&#10;          width: 100% !important;&#10;        }&#10;&#10;        /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */&#10;        .padding {&#10;          padding: 10px 5% 15px 5% !important;&#10;        }&#10;&#10;        .padding-meta {&#10;          padding: 30px 5% 0px 5% !important;&#10;          text-align: left;&#10;        }&#10;&#10;        .padding-copy {&#10;             padding: 10px 5% 10px 5% !important;&#10;          text-align: left;&#10;        }&#10;&#10;        .no-padding {&#10;          padding: 0 !important;&#10;        }&#10;&#10;        .section-padding {&#10;          padding: 50px 15px 50px 15px !important;&#10;        }&#10;&#10;        /* ADJUST BUTTONS ON MOBILE */&#10;        .mobile-button-container {&#10;            margin: 0 auto;&#10;            width: 100% !important;&#10;        }&#10;&#10;        .mobile-button {&#10;            padding: 15px !important;&#10;            border: 0 !important;&#10;            font-size: 16px !important;&#10;            display: block !important;&#10;        }&#10;&#10;    }&#10;&#10;    /* ANDROID CENTER FIX */&#10;    div[style*=&#34;margin: 16px 0;&#34;] { margin: 0 !important; }&#10;&#60;/style&#62;&#10;&#60;/head&#62;&#10;&#60;body style=&#34;margin: 0 !important; padding: 0 !important;&#34;&#62;&#10;&#10;&#60;!-- ONE COLUMN SECTION --&#62;&#10;&#60;table border=&#34;0&#34; cellpadding=&#34;0&#34; cellspacing=&#34;0&#34; width=&#34;100%&#34;&#62;&#10;    &#60;tr&#62;&#10;        &#60;td bgcolor=&#34;#ffffff&#34; align=&#34;center&#34; style=&#34;padding: 15px;&#34; class=&#34;section-padding&#34;&#62;&#10;            &#60;!--[if (gte mso 9)|(IE)]&#62;&#10;            &#60;table align=&#34;center&#34; border=&#34;0&#34; cellspacing=&#34;0&#34; cellpadding=&#34;0&#34; width=&#34;500&#34;&#62;&#10;            &#60;tr&#62;&#10;            &#60;td align=&#34;center&#34; valign=&#34;top&#34; width=&#34;500&#34;&#62;&#10;            &#60;![endif]--&#62;&#10;            &#60;table border=&#34;0&#34; cellpadding=&#34;0&#34; cellspacing=&#34;0&#34; width=&#34;100%&#34; style=&#34;max-width: 500px;&#34; class=&#34;responsive-table&#34;&#62;&#10;                &#60;tr&#62;&#10;                    &#60;td&#62;&#10;                        &#60;table width=&#34;100%&#34; border=&#34;0&#34; cellspacing=&#34;0&#34; cellpadding=&#34;0&#34;&#62;&#10;                            &#60;tr&#62;&#10;                                &#60;td&#62;&#10;                                    &#60;!-- COPY --&#62;&#10;                                    &#60;table width=&#34;100%&#34; border=&#34;0&#34; cellspacing=&#34;0&#34; cellpadding=&#34;0&#34;&#62;&#10;                                        *content*&#10;                                    &#60;/table&#62;&#10;                                &#60;/td&#62;&#10;                            &#60;/tr&#62;&#10;                        &#60;/table&#62;&#10;                    &#60;/td&#62;&#10;                &#60;/tr&#62;&#10;            &#60;/table&#62;&#10;            &#60;!--[if (gte mso 9)|(IE)]&#62;&#10;            &#60;/td&#62;&#10;            &#60;/tr&#62;&#10;            &#60;/table&#62;&#10;            &#60;![endif]--&#62;&#10;        &#60;/td&#62;&#10;    &#60;/tr&#62;&#10;&#60;/table&#62;&#10;&#10;&#60;/body&#62;&#10;&#60;/html&#62;&#10;`
	const h1 = ent.decode(html)
	res.send(h1)
})


module.exports = router
