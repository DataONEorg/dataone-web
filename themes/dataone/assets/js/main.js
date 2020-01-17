// Insert all block javascript
{{ $blockdir :=  .Site.Params.blockDir}}

{{ range (readDir $blockdir) }}
  // check that the name of the item in the blocks directory is another directory
  {{ $dirname := .Name }}
  {{ $blocksubdir := path.Join $blockdir $dirname }}
  {{ $stat := os.Stat $blocksubdir }}
  {{ if $stat.IsDir }}
    // read through the subdirectories of the block directory
    {{ range (readDir $blocksubdir) }}
    // If the file is an .js file, import it
      {{ if (strings.HasSuffix .Name "js") }}
        {{ $jspath := path.Join $blocksubdir .Name }}
          {{ readFile $jspath }}
      {{ end }}
    {{ end }}
  {{ end }}
{{ end }}
