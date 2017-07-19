YUI.add("moodle-atto_recordrtc-videomodule",function(e,t){e.M.atto_recordrtc.view_init=function(){player=document.querySelector("video#player"),startStopBtn=document.querySelector("button#start-stop"),uploadBtn=document.querySelector("button#upload"),recType="video",maxUploadSize=parseInt(recordrtc.maxfilesize.match(/\d+/)[0])*Math.pow(1024,2),e.M.atto_recordrtc.check_secure(),e.M.atto_recordrtc.check_browser(),startStopBtn.onclick=function(){var t=this;t.disabled=!0;if(t.textContent===M.util.get_string("startrecording","tinymce_recordrtc")||t.textContent===M.util.get_string("recordagain","tinymce_recordrtc")||t.textContent===M.util.get_string("recordingfailed","tinymce_recordrtc")){var n=document.querySelector("div[id=alert-danger]");n.parentElement.parentElement.classList.add("hide"),uploadBtn.parentElement.parentElement.classList.add("hide"),recordrtc.oldermoodle||(startStopBtn.classList.remove("btn-outline-danger"),startStopBtn.classList.add("btn-danger")),chunks=[],blobSize=0;var r={onMediaCaptured:function(e){t.stream=e,t.mediaCapturedCallback&&t.mediaCapturedCallback()},onMediaStopped:function(e){t.textContent=e},onMediaCapturingFailed:function(e){var t=null;if(e.name==="PermissionDeniedError"&&bowser.firefox)InstallTrigger.install({Foo:{URL:"https://addons.mozilla.org/en-US/firefox/addon/enable-screen-capturing/",toString:function(){return this.URL}}}),t=M.util.get_string("startrecording","tinymce_recordrtc");else if(e.name==="DevicesNotFoundError"||e.name==="NotFoundError"){var n=document.querySelector("div[id=alert-danger]");n.parentElement.parentElement.classList.remove("hide"),n.textContent=M.util.get_string("inputdevicealert","tinymce_recordrtc")+" "+M.util.get_string("inputdevicealert","tinymce_recordrtc"),t=M.util.get_string("recordingfailed","tinymce_recordrtc")}r.onMediaStopped(t)}};player.parentElement.parentElement.classList.remove("hide"),player.controls=!1,e.M.atto_recordrtc.captureAudioVideo(r),t.mediaCapturedCallback=function(){e.M.atto_recordrtc.startRecording(recType,t.stream)}}else clearInterval(countdownTicker),setTimeout(function(){t.disabled=!1},1e3),e.M.atto_recordrtc.stopRecording(t.stream),t.textContent=M.util.get_string("recordagain","tinymce_recordrtc"),recordrtc.oldermoodle||(startStopBtn.classList.remove("btn-danger"),startStopBtn.classList.add("btn-outline-danger"))}},e.M.atto_recordrtc.captureAudioVideo=function(t){e.M.atto_recordrtc.captureUserMedia({audio:!0,video:{width:{ideal:640},height:{ideal:480}}},function(e){player.srcObject=e,player.play(),t.onMediaCaptured(e)},function(e){t.onMediaCapturingFailed(e)})},e.M.atto_recordrtc.stopRecording=function(t){mediaRecorder.stop(),t.getTracks().forEach(function(e){e.stop()});var n=new Blob(chunks);player.src=URL.createObjectURL(n),player.muted=!1,player.controls=!0,uploadBtn.parentElement.parentElement.classList.remove("hide"),uploadBtn.textContent=M.util.get_string("attachrecording","tinymce_recordrtc"),uploadBtn.disabled=!1,uploadBtn.onclick=function(){if(!player.src||chunks===[])return window.alert(M.util.get_string("norecordingfound","tinymce_recordrtc"));var t=uploadBtn;return t.disabled=!0,e.M.atto_recordrtc.uploadToServer(recType,function(n,r){n==="ended"?(t.disabled=!1,e.M.atto_recordrtc.insert_annotation(recType,r)):n==="upload-failed"?(t.disabled=!1,t.textContent=M.util.get_string("uploadfailed","tinymce_recordrtc")+" "+r):n==="upload-failed-404"?(t.disabled=!1,t.textContent=M.util.get_string("uploadfailed404","tinymce_recordrtc")):n==="upload-aborted"?(t.disabled=!1,t.textContent=M.util.get_string("uploadaborted","tinymce_recordrtc")+" "+r):t.textContent=n}),undefined}}},"@VERSION@",{requires:["moodle-atto_recordrtc-commonmodule"]});
