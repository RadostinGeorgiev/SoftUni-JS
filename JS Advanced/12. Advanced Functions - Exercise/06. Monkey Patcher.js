function solution(command) {

    const arguments = {
        upvote: () => { this.upvotes++; },

        downvote: () => { this.downvotes++; },

        score: () => {
            let totalScore = this.upvotes - this.downvotes;
            let totalVotes = this.upvotes + this.downvotes;

            let number = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);

            let reportedUpvotes = totalVotes > 50
                ? this.upvotes + number
                : this.upvotes;

            let reportedDownvotes = totalVotes > 50
                ? this.downvotes + number
                : this.downvotes;

            let rating = 'new';

            if (totalVotes < 10) {
                rating = 'new';
            } else if (this.upvotes / totalVotes > 0.66) {
                rating = 'hot';
            } else if (totalScore >= 0 && totalVotes > 100) {
                rating = 'controversial';
            } else if (totalScore < 0) {
                rating = 'unpopular';
            }

            return [reportedUpvotes, reportedDownvotes, totalScore, rating];
        },
    }

    return arguments[command]();
}

let post = {
    id: "3",
    author: "emil",
    content: "wazaaaaa",
    upvotes: 100,
    downvotes: 100,
  };
  solution.call(post, 'upvote');
  solution.call(post, "downvote");
  let score = solution.call(post, "score"); // [127, 127, 0, 'controversial']
  console.log(score);
  for (let i = 0; i < 50; i++) {
      solution.call(post, "downvote");  // (executed 50 times)
  }
  score = solution.call(post, "score"); // [139, 189, -50, 'unpopular'] 
  console.log(score);   