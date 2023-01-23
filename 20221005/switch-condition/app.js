/**
 *  Switch Condition
 * 
 * switch ( switch param : Data Type ) { ===
 *      case　★★:
 * 　　　     //process
 *      break;
 * 
 *      case　★★:
 *           //process
 *      break;
 * 
 *      case　★★:
 *           //process
 *      break;
 *  
 * }
 */

switch (8) {
    case 'eight':
        console.log('Case one');
        break;

    case '8':
        console.log('Case two');
        break;
        
    case 10:
        console.log('Case three');
        break;

    default:
        console.log('Default case');
        break;
}

