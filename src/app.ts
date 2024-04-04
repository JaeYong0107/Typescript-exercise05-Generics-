// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         resolve('This is done!');
//     },2000);
// })

// promise.then(data => {
//     data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name:'JaeYong', hobbies: ['Sports']},{name: 25});
console.log(mergedObj);

interface Lengthy {
  length: number  
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if(element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if(element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name:'JaeYong'}, 'name'))

class DataStorage<T extends string | number | boolean> {
    private data: T[] =[];

    additem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorae = new DataStorage<string>();
textStorae.additem('JaeYong');
textStorae.additem('Lee');
textStorae.removeItem('Lee');
console.log(textStorae.getItems());

const numberStorage = new DataStorage<number | string>();

// const objStorage = new DataStorage<object>();
// const jaeyongObj = {name: 'JaeYong'};
// objStorage.additem({name:'JaeYong'});
// objStorage.additem({name:'Lee'});
// // ...
// objStorage.removeItem(jaeyongObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['JaeYong', 'Sports'];
// names.push('Lee');
// names.pop();
