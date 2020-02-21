const fs = require('fs');
const path = require('path');

// read data
function readChallenges(dataDirectory) {
    const files = fs.readdirSync(dataDirectory);
    const relevantChallengeFiles = files
        .filter(filename => filename.startsWith("example") || filename.startsWith('impossible'));
    return relevantChallengeFiles.map(filename => {
        const content = fs.readFileSync(path.join(dataDirectory, filename), 'utf-8');

        return {
            filename,
            challenge: createChallenge(content) 
        };
    });
}

function createCell(text) {
    return {
        obstructed: text === 1
    };
}

function createChallenge(text) {
    const challenge = {
        grid: [[]],
        player: [],
        goal: []
    };

    return challenge;
}

function isChallengeDescValid(text) {

}

// find all possible ways to solve the challenge
function findSolutions(challenge) {
    return [];
}

// create a score based on the number of turns to the solve the challenge
function scoreSolution(solution) {

}

// use the solution with the lowest score
function filterSolutions(solutions) {
    const items = solutions.map(solution => ({
        score: scoreSolution(solution),
        solution
    }));

    return items.reduce((res, item) => {
        if (res.length === 0) {
            res.push(item.solution);
        }

        if (item.score < res[0].score) {
            res.unshift(item.solution);
        }

        return res;
    }, []);
}

// display the solution in an interactive manner
function displaySolution(solution) {

}

function main() {
    const dataDirectory = path.join(process.cwd(), 'data');
    const challenges = readChallenges(dataDirectory);
    const reveal = challenges.map((challenge) => {
        let solutions = findSolutions(challenge);
        solutions = filterSolutions(solutions);
        return {
            challenge,
            solution: solutions[0]
        };
    });

    displaySolution(reveal);
}

main();