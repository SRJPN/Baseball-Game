var Score = (result, score) => {
    return [processInteger, processC, processD, processAdd]
        .reduce((agg, func) => func(agg, score), result)
};

exports.Play = (scores) => {
    var result = scores.reduce(Score, []);
    return result.reduce((x, y) => x + y);
};



const processInteger = (result, score) => {
    if (!isNaN(score))
        result.push(parseInt(score));
    return result;
}


const processC = (result, score) => {
    if (score == 'C')
        result.pop();
    return result;
}

const processD = (result, score) => {
    if (score == 'D')
        result.push(result[result.length - 1] * 2)
    return result;
}

const processAdd = (result, score) => {
    if (score == '+')
        result.push(result[result.length - 1] + result[result.length - 2])
    return result;
}