---
title: HTB - Alert
permalink: /writeups/htb-alert/
---

<div style="position: relative;">
<img src="https://labs.hackthebox.com/storage/avatars/6f4647030d6aadc676b8d8a459de344f.png" style="width: 100px;position: absolute;top: -30px;right: 15px;"/>

OS: Linux

Level: Easy

Status: Active

https://app.hackthebox.com/machines/Alert

---

## Recon
Running `nmap` against our target, we find a few ports open.

<input type="checkbox" id="article-image-1" class="article-image"/>
<label class="btn" for="article-image-1"><img src="/assets/images/writeups/alert/nmap_output.png"/></label>

Looking at port `80` we find a page that seems to host a markdown viewer application.  Navigating around, we find we have a contact form and an upload feature.  We also find a note in the `About Us` that says the administrator checks contact messages.

<input type="checkbox" id="article-image-2" class="article-image"/>
<label class="btn" for="article-image-2"><img src="/assets/images/writeups/alert/80_contact.png"/></label>
<input type="checkbox" id="article-image-3" class="article-image"/>
<label class="btn" for="article-image-3"><img src="/assets/images/writeups/alert/80_upload.png"/></label> 

Upon testing the markdown upload with a markdown file, we see that the `viewer` page has a `Share Markdown` link to the markdown file in the bottom right.  This points to `http://alert.htb/visualizer.php?link_share=676a8ac6642f86.22715350.md`, a link with a `link_share=` parameter.

Lets setup a quick test with `nc` to see if we can get that administrator to interact with us.  We run a `nc` server to see if the administraot will click on a link we post in the contact form.

<input type="checkbox" id="article-image-4" class="article-image"/>
<label class="btn" for="article-image-4"><img src="/assets/images/writeups/alert/80_contact_filled.png"/></label>
<input type="checkbox" id="article-image-5" class="article-image"/>
<label class="btn" for="article-image-5"><img src="/assets/images/writeups/alert/nc_contact_output.png"/></label>

Looks like the link gets clicked on.  Lets setup an automated exploit for this.

<hr />

## Exploit

Using inspector, we can identify how the API calls work for these two forms.

<input type="checkbox" id="article-image-6" class="article-image"/>
<label class="btn" for="article-image-6"><img src="/assets/images/writeups/alert/inspector_contact.png"/></label>
<input type="checkbox" id="article-image-7" class="article-image"/>
<label class="btn" for="article-image-7"><img src="/assets/images/writeups/alert/inspector_upload.png"/></label>

Looking at the API calls, we can see that the contact form is a simple post request with some form-data fields.  The Upload is a bit more with a file in the formdata.

Lets setup a few scripts for these that we can run from the terminal.  We'll put this in a single script just to make it easy to run.

Since we know the link is being clicked, let's try for a bit of XSS at first and see what we can get from the end user.  We'll setup a script tag in the markdown file that our script creates.  This script tag will attempt to navigate to the URL we give it, then send the response back to a server at the host and port we define.  This will allow us to get data from the end-users browser using XSS.

<input type="checkbox" id="article-image-8" class="article-image"/>
<label class="btn" for="article-image-8"><img src="/assets/images/writeups/alert/exploit.png"/></label>


---

</div>