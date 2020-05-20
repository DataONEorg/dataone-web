// This file combines all the javascript files needed for the website.
// It is executed as a template in the _baseof.html template

// Helper functions
{{  readFile "themes/dataone/assets/js/helpers.js"  }}

// Combine all javascript from libraries directory
{{  $librariesdir :=  "themes/dataone/assets/js/libraries/"  }}
{{  range (readDir $librariesdir)  }}
  {{  if (strings.HasSuffix .Name "js")  }}
    {{  $jspath := path.Join $librariesdir .Name  }}
    {{  readFile $jspath  }}
  {{  end  }}
{{  end  }}

// To pass the page context onto javascript templates
{{  $site := .Site  }}

// Combine all javascript from block subdirectories.
// Run each file as a template so that they can use Hugo functions
{{  $blockDir :=  .Site.Params.blockDir  }}
{{  range (readDir $blockDir)  }}
  {{  $dirname := .Name  }}
  {{  $blocksubdir := path.Join $blockDir $dirname  }}
  {{  $stat := os.Stat $blocksubdir  }}
  {{  if $stat.IsDir  }}
    {{  range $index, $file := (readDir $blocksubdir)  }}
      {{  if (strings.HasSuffix $file.Name "js")  }}
        {{  $jspath := path.Join $blocksubdir $file.Name  }}
        try {
          {{  $jsString := readFile $jspath  }}
          {{  $targetPath := path.Base $jspath  }}
          {{  $jsResource := $jsString | resources.FromString $targetPath | resources.ExecuteAsTemplate "main.js" (dict "Site" $site)  | resources.Minify  }}
          {{  $jsResource.Content  }}
        } catch (e) {
          console.log("error in: {{ $jspath }}, error messsage:" + e);
        }
      {{  end  }}
    {{  end  }}
  {{  end  }}
{{  end  }}
