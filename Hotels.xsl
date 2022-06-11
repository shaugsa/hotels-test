<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" />
    <xsl:template match = "/" name='strings'>
        <Lists>
            <Names>
                <xsl:for-each select="Hotels/Hotel">
                    <xsl:if test="substring-after(Name, 'Hilton')">
                        <Name>
                            <xsl:value-of select='Name'></xsl:value-of> 
                        </Name>
                    </xsl:if>    
                </xsl:for-each>
            </Names>
            <!-- <Prices>
                <xsl:for-each select="Hotels/Hotel">
                    <Price>
                        <xsl:value-of select="Price"></xsl:value-of>
                    </Price>
                </xsl:for-each>
            </Prices> -->
        </Lists>
    </xsl:template>
</xsl:stylesheet>