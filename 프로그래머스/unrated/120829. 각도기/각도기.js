function solution(angle) {    
    if(0 < angle && angle < 90){
        //예각
        return 1;
    }else if(angle == 90){
        //직각
        return 2;
    }else if(90 < angle && angle < 180){
        //둔각
        return 3;
    }else if(angle == 180){
        //평각
        return 4;
    }
}

//function solution(angle) {
//    return [0, 90, 91, 180].filter(x => angle>=x).length;
//}