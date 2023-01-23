function posNeg(a, b, negative) {
    if (((a < 0) && (b > 0) && negative == false) ||
        ((a > 0) && (b < 0) && negative == false)) {
        return true;
    } else if ((a < 0) && (b > 0) && negative == true ||
        ((a > 0) && (a < 0) && negative == true)) {
        return false;
    }
}