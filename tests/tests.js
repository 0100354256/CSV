var assert = chai.assert; // Linea para realizar los asertos correspondientes

suite('CSV.', function() {
    test('Ejemplo 1', function() {
        original.value = "\"Lorem\", \"ipsum\" ";
        calculate();
        assert.deepEqual(finalT.innerHTML,'<p>\n</p><table class="center" id="result">\n<tbody><tr>  <td>Lorem</td>   <td>ipsum</td>   </tr>\n</tbody></table>');
    });
});