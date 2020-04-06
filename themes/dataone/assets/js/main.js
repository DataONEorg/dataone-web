// This file combines all the javascript files needed for the website.
// It is executed as a template in the _baseof.html template

// Bring in parameters from config to use globally
var mobileDesktopBreakpoint = {{.Site.Params.mobileDesktopBreakpoint}};
var disqusShortname = {{ .Site.DisqusShortname }};

// Helper functions
{{ readFile "themes/dataone/assets/js/helpers.js" }}

// Combine all javascript from libraries directory
{{ $librariesdir :=  "themes/dataone/assets/js/libraries/"}}
{{ range (readDir $librariesdir) }}
  {{ if (strings.HasSuffix .Name "js") }}
    {{ $jspath := path.Join $librariesdir .Name }}
    {{ readFile $jspath }}
  {{ end }}
{{ end }}

// Combine all javascript from block subdirectories
{{ $blockDir :=  .Site.Params.blockDir}}
{{ range (readDir $blockDir) }}
  {{ $dirname := .Name }}
  {{ $blocksubdir := path.Join $blockDir $dirname }}
  {{ $stat := os.Stat $blocksubdir }}
  {{ if $stat.IsDir }}
    {{ range (readDir $blocksubdir) }}
      {{ if (strings.HasSuffix .Name "js") }}
        {{ $jspath := path.Join $blocksubdir .Name }}
        try {
          {{ readFile $jspath }}
        } catch (e) {
          console.log("error in: {{ $jspath }}");
        }
      {{ end }}
    {{ end }}
  {{ end }}
{{ end }}
