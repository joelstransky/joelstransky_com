const id = "uh-office-of-human-resources/index.mdx";
						const collection = "articles";
						const slug = "uh-office-of-human-resources";
						const body = "\r\nThere is no roadblock I don’t see as a challenge. This project is proof that I will go to any length to find a way over, under or around any problem so matter how much source I have to sift through.\r\n\r\n|                                                                                           |                                                                                           |\r\n| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |\r\n| ![University of Hawai'i Office of Human Resources](assets/www-hawaii-edu-ohr-1.png) | ![University of Hawai'i Office of Human Resources](assets/www-hawaii-edu-ohr-2.png) |\r\n\r\nA custom theme in the truest sense, this was a rather large undertaking of more than a year's work. Far beyond custom post and taxonomy types I covered some pretty steep hills. The client wanted to be able to re-use posts containing pertinent information as subsections in other posts but rendered in their original style. This required manually re-starting “the loop” without losing the original post format. Sub-loops are trivial in WordPress but a pseudo-parent-loop was required to honor the post’s type, look and feel. This also required a complex custom nav walker and lots of query filtering to be able to splice links, anchors, predecessors and descendants. Oh, and I even patched a bug in WordPress core to make it work! (https://core.trac.wordpress.org/ticket/41717)\r\n\r\nMany custom post editors were created using Advanced Custom Fields' incredible JSON flat file concept making it simple to version control. Oh, I had to fix that too. (https://support.advancedcustomfields.com/forums/topic/the-acf-json-workflow/)\r\n\r\nA huge piece was the public/private document server that had to feel local to the admin. This meant an almost complete rewrite of the Wysiwyg link dialog as it was not built to re-init for each link or access multiple REST services. The REST request itself required a second WordPress install locked down to all but a virtual user on the main site so that public and private PDF’s could be rendered inline depending on the users role.\r\n\r\nOn top of all that I created a Bower package inspired by fontawesome for Material Design icons. (https://github.com/joelstransky/material-design-icons-scss) and developed a SCSS strategy where child themes still got fed variables from the parent so only what changed needed to be written.\r\n\r\nDuring all of this I regularly met with the client, advised on technical problems and helped mitigate scope creep.\r\n\r\nFinally, I conducted training of the human resources staff on how to use it.\r\n\r\n![University of Hawai'i Office of Human Resources](assets/www-hawaii-edu-ohr-3.png)\r\n";
						const data = {title:"University of Hawaiʻi® Office of Human Resources",image:{src:"/_astro/www-hawaii-edu-ohr-4.f11067de.png",width:2862,height:1410,format:"png",orientation:void 0},date:new Date(1486252800000),tag:["wordpress","php","mySQL","html","css","javascript"]};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/stran/Documents/Work/joelstransky_com/src/content/articles/uh-office-of-human-resources/index.mdx",
							rawData: "\r\ntitle: University of Hawaiʻi® Office of Human Resources\r\ndate: 2017-02-05\r\ndescription: # Add post description (optional)\r\nimage: 'assets/www-hawaii-edu-ohr-4.png' # Add image post (optional)\r\ntag: [wordpress, php, mySQL, html, css, javascript] # add tag\r",
						};

export { _internal, body, collection, data, id, slug };