
//获得相应格子距离期盘顶部的距离
function get_pos_top(i, j) {
    return 1 + i * (1 +5);
}

//获得相应格子距离棋盘左边的距离
function get_pos_left(i, j) {
    return 1 + j * (1 +5);
}

//获得相应数字的背景色
function get_number_background_color(number) {
    switch (number) {
        case 2: return '#eee4da'; break;
        case 4: return '#ede0c8'; break;
        case 8: return '#f2b179'; break;
        case 16: return '#f59563'; break;
        case 32: return '#f67c5f'; break;
        case 64: return '#f65e3b'; break;
        case 128: return '#edcf72'; break;
        case 256: return '#edcc61'; break;
        case 512: return '#9c0'; break;
        case 1024: return '#33b5e5'; break;
        case 2048: return '#09c'; break;
        case 4096: return '#a6c'; break;
        case 8192: return '#93c'; break;
    }
    return 'black';
}

//获得相应数字的颜色
function get_number_color(number) {
    if (number <= 4)
        return '#776e65';
    return 'white';
}

//判断棋盘上是否还有空格子
function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

//判断能否左移
function can_move_left(board) {
    for(var i=0; i<4; i++){
        for(var j=1; j<4; j++){
            if(board[i][j] != 0){
                if(board[i][j-1] == 0 || board[i][j] == board[i][j-1]){
                    return true;
                }
            }
        }
    }
    return false;
}
//判断能否右移
function can_move_right(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                if (board[i][j + 1] == 0 || board[i][j] == board[i][j + 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//判断能否上移
function can_move_up(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//判断是否能向下移动
function can_move_down(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}


//判断水平方向上时候是否有空格子
function no_block_horizontal(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0) {
            return false;
        }
    }
    return true;
}

//判断垂直方向移动的时候是否有空格
function no_block_vertical(col,row1,row2,board) {
    for (var i = row1 + 1; i < row2; i++){
        if (board[i][col] != 0){
            return false;
        }
    }
    return true;
}

//无法移动
function nomove(board) {
    if (can_move_down(board) || can_move_up(board) || can_move_right(board) || can_move_left(board)) {
        return false;
    }
    return true;
}

//保存状态，模拟快照，每一步生成一个对象，
function save_status(board) {
    var o = new Object();
    var n = 1;
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            o[n] = score+ ',' + board[i][j];
            n ++;
        }
    }
    back.push(o);
}


