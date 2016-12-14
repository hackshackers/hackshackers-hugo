## Data files

We've nested Hugo's [data directory](https://gohugo.io/extras/datafiles/) inside the content directory. This is not how Hugo expects the source files to be [organized](https://gohugo.io/overview/source-directory/) but it allows us to keep both the content and data files inside the same [submodule](https://github.com/hackshackers/hackshackers-hugo-content).

During our [deploy workflow](../../wercker.yml), we delete the directory that Hugo generated from our data files before deploying to S3.
