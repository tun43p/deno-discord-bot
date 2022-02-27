.PHONY: bundle clean fmt help lint run


#: Build library into a bundle for distribution
bundle: mod.ts
	deno bundle --unstable  mod.ts > bundle.ts

#: Clean up built resources
clean:
	rm -f bundle.ts

#: Format all project
fmt:
	deno fmt --config ./deno.json

#: Show this help
help:
	@cat $(MAKEFILE_LIST) | deno run -q https://deno.land/x/makehelp/help.ts

#: Lint all project
lint:
	deno lint --config ./deno.json

#: Run it locally
run:
	deno run -allow-env --allow-net --allow-read --config ./deno.json mod.ts