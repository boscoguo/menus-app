import { filterMenuTitle, addTreeNode } from "./MenuTitleUtils";

const nodeData = {
	title: 'parent 1',
	key: '0-0',
	children: [
		{ title: 'login', key: '0-0-0' },
		{
			title: 'son 1',
			key: '0-0-1',
			children: [
				{title: 'Button 1', key: '0-0-1-0'},
				{title: 'Add node', key: '0-0-1-1', ifAdd: true}
			]
		}
	]
}

const data = [
	{
		"title": "parent 1",
		"key": "0-0",
		"children": [
			{
				"title": "login",
				"key": "0-0-0"
			}
		]
	},
	{
		"title": "parent 2",
		"key": "0-1",
	}
]

test("filterMenuTitle should be working", () => {
	expect(filterMenuTitle(nodeData)).toEqual({ isBtnTitle: false, title: 'parent 1' })
})


test("if it is not the add node button no new nested button created", () => {
	expect(addTreeNode(data, "0-0-0", false)).toEqual([
		{
			"title": "parent 1",
			"key": "0-0",
			"children": [
				{
					"title": "login",
					"key": "0-0-0"
				}
			]
		},
		{
			"title": "parent 2",
			"key": "0-1",
		}
	])
})

test("addTreeNode function should work", () => {
	// if the button be clicked the new nested button will be created
	expect(addTreeNode(data, "0-0-0", true)).toEqual([
		{
			"title": "parent 1",
			"key": "0-0",
			"children": [
				{
					"title": "login",
					"key": "0-0-0"
				},
				{
					"title": "new son",
					"key": "0-0-1",
					"children": [
						{
							"title": "new son button",
							"key": "0-0-1-0",
							"ifAdd": true,
						}
					]
				}
			]
		},
		{
			"title": "parent 2",
			"key": "0-1",
		}
	])
})
