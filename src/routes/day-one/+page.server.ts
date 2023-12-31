import type {PageServerLoad} from "./$types"

interface Child {
    name: string,
    tally: number
}

// original solution
// sorting algorithm 1
function sortList_1(list: Child[]): Child[] {
    for (let i: number = 0; i < (list.length - 1); i++) {
        for (let j: number = 0; j < (list.length - 1); j++) {
            const element_1: Child = list[j]
            const element_2: Child = list[j + 1]

            let swap: boolean = element_1.tally < element_2.tally

            list[j] = swap ? element_2 : element_1
            list[j + 1] = swap ? element_1 : element_2
        }
    }

    return list
}

// new solution
// sorting algorithm 2
function sortList_2(list: Child[]): Child[] {
    for (let i: number = 0; i < (list.length - 1); i++) {
        for (let j: number = 0; j < (list.length - 1); j++) {
            if (list[j].tally < list[j + 1].tally) {
                const temp: Child = list[j]

                list[j] = list[j + 1]
                list[j + 1] = temp
            }
        }
    }

    return list
}

export const load: PageServerLoad = ({fetch}): any => {
    return {
        data: new Promise(async (resolve: (value: Child[]) => void, reject: (reason?: any) => void): Promise<void> => {
            try {
                const response: Response = await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json", {
                    method: "GET"
                })
                const data: Child[] = await response.json()

                if (response.status === 200) {
                    resolve(sortList_2(data))
                } else {
                    reject("internal error.")
                }
            } catch (error: unknown) {
                console.error(error)
                reject(error)
            }
        })
    }
}
