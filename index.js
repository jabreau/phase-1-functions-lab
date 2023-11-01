function distanceFromHqInBlocks(pickupBlock){
    const hqBlock = 42;

    if (hqBlock > pickupBlock) {
        return hqBlock-pickupBlock;
    } else if (hqBlock < pickupBlock) {
        return pickupBlock-hqBlock;
    }
}

function distanceFromHqInFeet(pickupBlock) {
    return distanceFromHqInBlocks(pickupBlock) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start-destination)*264;
    } else if (start < destination) {
        return (destination-start)*264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    const messageFree = 0;
    const messageMath = (distance-400)*0.02;
    const messageFlatRate = 25;
    const messageTooFar = 'cannot travel that far';
    
    if (distance <= 400) {
        return messageFree;
    } else if (distance > 400 && distance <= 2000) {
        return messageMath;
    } else if (distance > 2000 && distance <= 2500) {
        return messageFlatRate;
    } else if (distance > 2500) {
        return messageTooFar;
    }
}