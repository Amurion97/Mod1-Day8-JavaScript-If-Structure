let number = prompt("Nhap vao 1 so: ");
switch (number[0]){
    case '0':
        switch (number[1]){
            case ".":
                alert(1);
                break;
            default:
                alert(0);
                break;
        }
        break;
    case "-":
        alert(-1);
        break;
    default:
        alert(1);
        break;
}
