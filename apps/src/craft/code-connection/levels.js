import { createToolbox } from '../../block_utils';

function craftBlock(type, children = "") {
  return block(`craft_${type}`, children);
}

function category(name, children, properties = "") {
  return `<category name='${name}' ${properties}>${children}</category>`;
}

function block(type, children = "") {
  return `<block type='${type}'>${children}</block>`;
}

module.exports = {
  custom: {
    requiredBlocks: [],
    freePlay: false,
    disable_variable_editing: false,
    toolbox: createToolbox(
      category('Agent',
        craftBlock('move') +
        craftBlock('turn') +
        craftBlock('tptoplayer')+
        craftBlock('place', `<value name='SLOTNUM'><block type="math_number"><title name='NUM'>0</title></block></value>`) +
        craftBlock('destroy') +
        craftBlock('till') +
        craftBlock('attack') +
        craftBlock('collect', `<value name='ITEM'>${craftBlock('block')}</value>`) +
        craftBlock('collectall') +
        craftBlock('drop', `<value name='SLOTNUM'><block type="math_number"><title name='NUM'>0</title></block></value>
                            <value name='QUANTITY'><block type="math_number"><title name='NUM'>1</title></block></value>`) +
        craftBlock('dropall') +
        craftBlock('detect') +
        craftBlock('inspect') +
        craftBlock('inspectdata') +
        craftBlock('getitemdetail', `<value name='SLOTNUM'><block type="math_number"><title name='NUM'>0</title></block></value>`) +
        craftBlock('getitemspace', `<value name='SLOTNUM'><block type="math_number"><title name='NUM'>0</title></block></value>`) +
        craftBlock('getitemcount', `<value name='SLOTNUM'><block type="math_number"><title name='NUM'>0</title></block></value>`) +
        craftBlock('transfer', `<value name='SRCSLOTNUM'><block type="math_number"><title name='NUM'>0</title></block></value>
                                <value name='DSTSLOTNUM'><block type="math_number"><title name='NUM'>1</title></block></value>
                                <value name='QUANTITY'><block type="math_number"><title name='NUM'>1</title></block></value>`) +
        craftBlock('detectredstone')) +
      category('Item',
          craftBlock('block') +
          craftBlock('miscellaneous') +
          craftBlock('tool') +
          craftBlock('decoration') +
          craftBlock('getnameof', `<value name='ITEM'>${craftBlock('block')}</value>`) +
          craftBlock('getdataof', `<value name='ITEM'>${craftBlock('block')}</value>`) +
          craftBlock('createblock', `<value name='BLOCKTYPE'>${craftBlock('block')}</value>
                                     <value name='BLOCKDATA'>${craftBlock('block')}</value>`)) +
      category('Blocks',
        craftBlock('tptotarget') +
        craftBlock('tptopos') +
        craftBlock('fill', `<value name='ITEM'>${craftBlock('block')}</value>`) +
        craftBlock('give', `<value name='ITEM'>${craftBlock('block')}</value>
                            <value name='AMOUNT'><block type="math_number"><title name='NUM'>10</title></block></value>`) +
        craftBlock('kill') +
        craftBlock('setblock',`<value name='ITEM'>${craftBlock('block')}</value>`) +
        craftBlock('summon') +
        craftBlock('testforblock', `<value name='ITEM'>${craftBlock('block')}</value>`) +
        craftBlock('testforblocks') +
        craftBlock('clone') +
        craftBlock('clonefiltered', `<value name='ITEM'>${craftBlock('block')}</value>`) +
        craftBlock('executeasother') +
        craftBlock('timesetbyname') +
        craftBlock('timesetbynumber', `<value name='TIME'><block type="math_number"><title name='NUM'>1200</title></block></value>`) +
        craftBlock('weather')) +
      category('Logic',
        block('logic_compare') +
        block('logic_operation') +
        block('logic_negate') +
        block('logic_boolean') +
        block('text')) +
      category('Control',
        block('controls_if') +
        block('controls_if', "<mutation else='1'></mutation>") +
        block('controls_for') +
        block('controls_whileUntil') +
        block('controls_repeat_ext', `<value name='TIMES'>${block('math_number', '<field name="NUM">10</field>')}</value>`) +
        craftBlock('wait')) +
      category('Variables', "", 'custom="VARIABLE"') +
      category('Functions', "", 'custom="PROCEDURE"') +
      category('Math',
        block('math_number') +
        block('math_arithmetic') +
        block('math_random_int',
          `<value name='FROM'>${block('math_number', '<field name="FROM">1</field>')}</value>` +
          `<value name='TO'>${block('math_number', '<field name="TO">10</field>')}</value>`))
    )
  }
};
