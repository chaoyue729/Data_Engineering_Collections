document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-2c768148c4d27cab10fe818942078e18.css">')
document.write('<div id=\"gist84069764\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-example_dataproc_twitter_main_recommender-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python \">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-en\">@app.route<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>/make_recommendation<span class=\"pl-pds\">&quot;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">make_reco<\/span>():<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    t0 <span class=\"pl-k\">=<\/span> time.time()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">    scores <span class=\"pl-k\">=<\/span> base_utils.process_input_items(request.args)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">    keys <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">map<\/span>(<span class=\"pl-k\">lambda<\/span> <span class=\"pl-smi\">x<\/span>: ndb.Key(config[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>recos<span class=\"pl-pds\">&#39;<\/span><\/span>][<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>kind<span class=\"pl-pds\">&#39;<\/span><\/span>], x),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">        scores.keys())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">    entities <span class=\"pl-k\">=<\/span> [e <span class=\"pl-k\">for<\/span> e <span class=\"pl-k\">in<\/span> ndb.get_multi(keys) <span class=\"pl-k\">if<\/span> e]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> <span class=\"pl-k\">not<\/span> entities:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">        result <span class=\"pl-k\">=<\/span> {<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>results<span class=\"pl-pds\">&#39;<\/span><\/span>: [], <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>statistics<span class=\"pl-pds\">&#39;<\/span><\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">            {<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>elapsed_time<span class=\"pl-pds\">&#39;<\/span><\/span>: time.time() <span class=\"pl-k\">-<\/span> t0}}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> jsonify(result)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">    results <span class=\"pl-k\">=<\/span> utils.process_recommendations(entities, scores,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">int<\/span>(request.args.get(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>n<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-c1\">10<\/span>))) <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">    results[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>statistics<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">=<\/span> {}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">    results[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>statistics<span class=\"pl-pds\">&#39;<\/span><\/span>][<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>elapsed_time<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">=<\/span> time.time() <span class=\"pl-k\">-<\/span> t0 <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-example_dataproc_twitter_main_recommender-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> jsonify(results) <\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/WillianFuks/c13ed7c2906cbf7ec456a7003281e04c/raw/8bc64826a79864bfab82c77b4cbb75e3e11d0162/example_dataproc_twitter_main_recommender.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/WillianFuks/c13ed7c2906cbf7ec456a7003281e04c#file-example_dataproc_twitter_main_recommender-py\">example_dataproc_twitter_main_recommender.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
